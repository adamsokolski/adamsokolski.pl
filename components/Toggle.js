import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "react-feather";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring}>
        {isOn ? "🌞" : "🌙"}
      </motion.div>
    </div>
  );
};

export default Toggle;
