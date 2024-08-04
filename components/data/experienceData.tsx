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

const experiences = [
  {
    title: "Temp",
    company: "Temp",
    companyUrl: "https://siddhp.me",
    hasLogo: true,
    logo: "https://siddhwebsitestorage.blob.core.windows.net/media/images/uber.png",
    logoDimensions: { width: 100, height: 100 },
    useLogoAsName: false,
    startDate: "01 Sep 2024",
    endDate: "01 Dec 2024",
    location: "Temp",
    description:
      "Culinary Compass lets users track restaurant visits by entering the restaurant, visit date, and a rating out of 5 stars, with assistance from the Google Places Autocomplete API. The Foursquare Places API fetches data about the restaurant to build a user profile. Recommendations are made using a Scikit-Learn cosine similarity algorithm based on the user's profile and selected location/radius via Google Maps. Users can generate a year-end PDF report of their favorite restaurants, cuisines, price categories, and dining times, created with ReportLab and Matplotlib, and emailed to them. User information is stored securely in a SQLite database with bcrypt password hashing, and password resets are managed via email. Culinary Compass is deployed on Azure using Nginx, Gunicorn, Supervisor, and secured with TLS via Certbot.",
    skills: ["Working"],
    image:
      "https://siddhwebsitestorage.blob.core.windows.net/media/images/uber.png",
    imageDimensions: { width: 100, height: 100 },
  },
];

export function getExperience(index: number) {
  return experiences[index];
}

export function getExperiences() {
  return experiences;
}
