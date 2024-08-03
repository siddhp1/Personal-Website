import client from "./Client";

export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  hasLogo: boolean;
  logo?: string;
  logoDimensions?: { width: number; height: number };
  useLogoAsName: boolean;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  skills: string[];
  image: string;
  imageDimensions: { width: number; height: number };
}

const getExperiences = async (): Promise<Experience[]> => {
  const response = await client.getEntries({
    content_type: "experience",
    order: "-fields.endDate",
  });

  const experiences = response.items.map((item: any) => {
    const fields = item.fields;
    return {
      title: fields.title,
      company: fields.company,
      companyUrl: fields.companyUrl,
      hasLogo: fields.hasLogo,
      logo: `https:${fields.logo.fields.file.url}`,
      logoDimensions: fields.logo.fields.file.details.image,
      useLogoAsName: fields.useLogoAsName,
      startDate: fields.startDate,
      endDate: fields.endDate,
      location: fields.location,
      description: fields.description,
      skills: fields.skills,
      image: `https:${fields.image.fields.file.url}`,
      imageDimensions: fields.image.fields.file.details.image,
    } as Experience;
  });

  return experiences;
};

export default getExperiences;
