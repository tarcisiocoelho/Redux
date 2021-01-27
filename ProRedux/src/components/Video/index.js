import React from "react";

import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => {
  return (
    <>
    <div className="text-center lead mt-5">
      <strong>Módulo: {activeModule.title}</strong>
      <br />
      <span className="display-4">Aula: {activeLesson.title}</span>
    </div><hr className="w-25 mx-auto"/>
    </>
  
  );
};

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
