import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { destroyTask, updateTask } from '../actions/index';
import Moment from 'react-moment';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { is_complete: this.props.task.is_complete };
  }

  // componentDidMount() {
    // this.setState({ this.props.checklist });
    // checklist = this.props.checklist
    // this.fetchTasks();
  // }


  //  componentDidUpdate(nextProps) { // For after checklists
  //   if (this.props.checklist != nextProps.checklist) {
  //     this.props.fetchTask(nextProps.checklist);
  //   }
  // }


  updateTask = (task) => {
    this.props.updateTask(task)
  }


  handleClick = (task) => {
    this.props.destroyTask(task);
    console.log(`test test ${this.props.task.name}`)
  }

  render() {
    return (
      <div className={this.props.task.is_complete === true ? 'task task-complete' : 'task' }>
        <div className="task-title">
          <h3>{this.props.task.title}</h3>
        </div>
        <div className="task-footer">
          <div className="task-info">
            <div className="task-due">
              <p>Due: </p>
              <Moment format="MM/DD/YYYY" parse="YYYY-MM-DD">
                {this.props.task.due_date}
              </Moment>
            </div>
            <div className="assigned-to">
              <p><strong>Assigned to: </strong>{`${this.props.task.assigned_to}`}</p>
            </div>
          </div>
          <div className="task-action">
            <div className="task-checkbox">
              <input
                type="checkbox"
                onClick={() => this.updateTask(this.props.task)}
                defaultChecked={this.props.task.is_complete} />
            </div>
            <div className="class-destroy">
              <button
                className="task-btn-destroy"
                onClick={() => this.handleClick(this.props.task)}
              ><i className="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ destroyTask, updateTask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
