import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("/MyProject.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch projects data");
        }
        return res.json();
      })
      .then((data) => {
        const proj = data.find((p) => p.id === parseInt(id));
        if (!proj) {
          setError("Project not found");
          setProject(null);
        } else {
          setProject(proj);
          setError(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-32">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-20 text-red-500">
        <p>{error}</p>
        <Link
          to="/projects"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to Projects
        </Link>
      </div>
    );

  return (
    <section className="max-w-7xl mx-auto p-6 my-20 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <a href={project.live_link} target="_blank" rel="noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      </a>

      <p className="mb-4 text-gray-700">{project.description}</p>

      <h2 className="text-xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        {project.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
      <p className="mb-4 text-gray-600">{project.technologies.join(", ")}</p>

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-2">Challenges Faced:</h2>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {project.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </>
      )}

      {/* Future Plans */}
      {project.future_plans && project.future_plans.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-2">
            Future Plans & Improvements:
          </h2>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {project.future_plans.map((plan, i) => (
              <li key={i}>{plan}</li>
            ))}
          </ul>
        </>
      )}

      <div className="flex gap-4">
        <a
          href={project.live_link}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Live Site
        </a>
        {project.client_git_link && (
          <a
            href={project.client_git_link}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Client Code
          </a>
        )}
        {project.server_git_link && (
          <a
            href={project.server_git_link}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Server Code
          </a>
        )}
      </div>

      <Link
        to="/"
        state={{ scrollTo: "projects" }}
        className="inline-block mt-8 text-blue-600 hover:underline"
      >
        ← Back to Projects
      </Link>
    </section>
  );
};

export default ProjectDetails;
