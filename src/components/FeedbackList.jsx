import { useContext, useEffect }  from "react";

// npm i framer-motion@4.1.17
import { motion, AnimatePresence } from "framer-motion";

import Spinner from "./shared/Spinner"
import FeedbackItem from "./FeedbackItem";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackList() {

  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? <Spinner /> : (
    
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}>
              <FeedbackItem
                key={item.id}
                item={item}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    
  );
}

export default FeedbackList;
