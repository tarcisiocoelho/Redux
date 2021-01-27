import React from "react";
import './index.css';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CourseActions from "../../store/actions/action";

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <>
    <aside className="text-center lead">
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)} className="btn btn-primary btn-sm m-3">
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside><hr className="w-25 mx-auto"/>
    </>
  );
};

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
