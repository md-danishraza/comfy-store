import React from "react";
import { useNavigation } from "react-router-dom";

function Submitbtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";

  return (
    <button
      className="btn btn-primary btn-block"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-dots loading-xl"></span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
}

export default Submitbtn;
