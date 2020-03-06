import React, { Component } from 'react';
import TaskForm from '../containers/task_form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import Task from '../components/task';


class CheckList extends Component {
  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    this.props.fetchTasks(this.props.checklist)
  }

  render() {
    return (
      console.log('hi from checklist container'),
      console.log(`hi from checklist ${this.props.checklist.id}`),
      <div className="CheckList-container">
        <div>
          <h2>{this.props.checklist.name}'s container</h2>
        </div>
        <div className="CheckList">
          <div>
            {
              this.props.tasks.map((task) => {
                return <Task key={task.id} task={task} />;
              })
            }
          </div>
        </div>
        <div className="task-form">

        </div>
      </div>
    );
  }
}
//   // <TaskForm />

function mapStateToProps (state) {
  return {
    tasks: state.tasks,
    selectedStage: state.selectedStage,
    checklists: state.checklists

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);





