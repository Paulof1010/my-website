export default async function projectsView() {
  try {
    const res = await fetch("https://api.github.com/users/paulof1010/repos");
    const data = await res.json();

    const githubHTML = data
      .map(
        (repo) => `
      <div class="project-card">
        <h4 class="project-title">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </h4>
        <p class="project-details">
          ⭐ ${repo.stargazers_count} | Forks: ${
          repo.forks_count
        } | Language: ${repo.language || "N/A"}
        </p>
      </div>
    `
      )
      .join("");

    const youtubeHTML = `
      <div class="videos-section">
        <h3 class="videos-title">Got Talent 2022:</h3>
        <div class="videos-grid">
          <div class="video-card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fxjRH3lPwrs?si=NJChZ5S4kR2_04ZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div class="video-card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AGS6Nlh-M-U?si=BaoYfbq1hOhbSp8f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div class="video-card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kucUvLuFGuo?si=6oY8Mdcw0qwxeqKu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        <h3 class="videos-title">Academic Performance(2016):</h3>
          <div class="video-card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/J1oav-qEAF8?si=IU9q3WNbUpgDU-MN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    `;

    return `
      <section class="page projects">
        <h2>GitHub Projects:</h2>

        <div class="projects-container">
          ${githubHTML}
        </div>

        <h2>Music Projects:</h2>
        ${youtubeHTML}
      </section>
    `;
  } catch (err) {
    console.error("Failed to load projects:", err);
    return `<section class="page projects"><h2>Projects</h2><p>Could not load projects.</p></section>`;
  }
}
