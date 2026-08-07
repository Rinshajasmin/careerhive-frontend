import {
  Palette,
  CodeXml,
  MonitorCog,
  PenTool,
} from "lucide-react";

import CategoryCard from "../../../components/common/CategoryCard";

const categories = [
  {
    title: "Web Design",
    icon: Palette,
  },
  {
    title: "Web Development",
    icon: CodeXml,
  },
  {
    title: "Software Engineer",
    icon: MonitorCog,
  },
  {
    title: "Graphic Designer",
    icon: PenTool,
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-4xl font-bold leading-[1.3] gradient-text">
            Our Categories
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;