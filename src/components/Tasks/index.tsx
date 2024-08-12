import { useState } from "react";
import { SiX } from "react-icons/si";
import styles from "./index.module.css";

function Tasks() {

  const [communityTask] = useState([
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
    {
      image: "",
      link: "https://x.com/$GARRI",
      description: "Follow $GARRI on X.com",
      points: 500,
    },
  ]);

  return (
    <div className={styles.container}>
      <div className="py-12 text-left text-white space-y-8 h-full overflow-auto">
        <div className="">
          <p className="font-bold text-2xl">
            GARRI Community Tasks <sup>{communityTask.length}</sup>
          </p>
          <p className="text-sm">
            Engage in GARRI community task and be rewarded in awesome tokens
          </p>

        </div>
        <div className="text-left space-y-4">
          {communityTask.map((task) => (
            <div className="bg-white text-black p-4 rounded-md flex justify-between items-center gap-4">
              {/* <img className="shrink-0" src="" /> */}
              <SiX className="text-2xl shrink-0" />
              <div className="w-full grow">
                <p className="font-bold">{task.description}</p>
                <p className="text-sm">+ {task.points} pts</p>
              </div>
              <button className="w-auto px-4 py-2 rounded-full font-bold text-xs bg-black text-white">
                Start
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
