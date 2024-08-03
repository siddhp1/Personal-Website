import { cache } from "react";
import client from "./Client";

export interface Project {
  title: string;
  shortDesc: string;
  longDesc: string;
  skills: string[];
  thumbnail: string;
  thumbnailDimensions: { width: number; height: number };
  hasDemo: boolean;
  hasRepo: boolean;
  demoUrl?: string;
  repoUrl?: string;
}

const fetchProjects = async () => {
  const response = await client.getEntries({
    content_type: "project",
    order: ["fields.order"],
  });

  const projects = response.items.map((item: any) => {
    const fields = item.fields;
    return {
      title: fields.title,
      shortDesc: fields.shortdesc,
      longDesc: fields.longdesc,
      skills: fields.skills,
      thumbnail: `https:${fields.thumbnail.fields.file.url}`,
      thumbnailDimensions: fields.thumbnail.fields.file.details.image,
      hasDemo: fields.hasdemo,
      hasRepo: fields.hasrepo,
      demoUrl: fields.demourl,
      repoUrl: fields.repourl,
    } as Project;
  });

  return projects;
};

const getProjects = cache(fetchProjects);

export default getProjects;
