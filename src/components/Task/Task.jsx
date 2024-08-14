import clsx from 'clsx';
import s from './Task.module.css';
import icons from '../../images/icons.svg';
import { useSelector } from 'react-redux';
import { selectUserTheme } from '../../redux/user/userSelectors';
import { useEffect } from 'react';
import { TaskControler } from './TaskControler';

export const Task = ({ task }) => {
  const { title, description, priority, deadline } = task;
  const colorScheme = useSelector(selectUserTheme);

  return (
    <li
      className={clsx(
        s.boardTaskBackground,
        s.priorityColor,
        priority === 'low' && s.priorityLow,
        priority === 'medium' && s.priorityMedium,
        priority === 'high' && s.priorityHigh
      )}
      key={task._id}
    >
      <ul className={s.boardTask}>
        <li className={s.taskTitle}>{title}</li>
        <li className={s.taskDescr}>{description}</li>
        <li className={s.taskInfo}>
          <div>
            Priority
            <div className={s.priorityBox}>
              <span
                className={clsx(
                  s.priorityCircle,
                  s.priorityColor,
                  priority === 'low' && s.priorityLow,
                  priority === 'medium' && s.priorityMedium,
                  priority === 'high' && s.priorityHigh
                )}
              ></span>
              <span className={s.taskProps}>{priority}</span>
            </div>
          </div>
          <div className={s.deadlineBox}>
            Deadline
            <span className={s.taskProps}>2000</span>{' '}
            {/* change for DatePicker */}
            {/* <span className={s.taskProps}>{deadline}</span> */}
          </div>
          <TaskControler />
        </li>
      </ul>
    </li>
  );
};
