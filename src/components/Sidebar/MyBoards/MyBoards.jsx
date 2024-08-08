import s from './MyBoards.module.css';
import icons from '../../../images/icons.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import { fetchColumns } from '../../../redux/boards/boardsOperations';
import { changeBg, changeCurrentBoard } from '../../../redux/boards/boardsSlice';
// import DeleteBoard from '../BoardModal/DeleteBoard';
// import EditBoard from '../BoardModal/EditBoard';

const MyBoards = (desk) => {
  const [isOpen, setIsOpen] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const dispatch = useDispatch();


  if (desk.desk === undefined) {
    return null;
  }

  const addColumns = id => {
    dispatch(fetchColumns(id));
    dispatch(changeBg(desk.desk.currentBg));
    dispatch(changeCurrentBoard(id));
  };

  const deskRoute = desk.desk.title.split(' ').join('-');

  const projectIcons= `#${desk.desk.icon}`;

  const toggleModal = typeToggle => {
    setIsOpen(isOpen => !isOpen);
    setTypeModal(typeToggle);
  };
  return (
    <>
      <div className={s.list}>
        <div className={s.item}>
          <NavLink to={deskRoute}className={({ isActive }) => isActive ? `${s.navItem} ${s.active}` : s.navItem}>
          <button className={s.wrapperProjects}  onClick={() => addColumns(desk.id)}>
            <svg width="18px" height="16px">
              <use href={projectIcons}></use>
            </svg>
            <p className={s.project}></p>
          </button>
          <div className={s.btnContainer}>
          <div className={s.wrapperIcons}>
              <svg
                width="16px"
                height="16px"
                className={s.iconEdit}
              >
                <use href={`${icons}#icon-pencil`}></use>
              </svg>
            </div>
            <div className={s.wrapperIcons}>
              <svg
                width="16px"
                height="16px"
                className={s.iconDelete}
                onClick={() => toggleModal('delete')}
              >
                <use href={`${icons}#icon-trash`}></use>
              </svg>
            </div>
            </div>
            </NavLink>
        </div>
        {isOpen &&
        (typeModal === 'edit' ? (
          <Modal
            onClose={toggleModal}
            // children={<EditBoard desk={desk} onClose={toggleModal} />}
          />
        ) : (
          <Modal
            onClose={toggleModal}
            // children={<DeleteBoard desk={desk} onClose={toggleModal} />}
          />
        ))}
      </div>
    </>
  );
};


export default MyBoards;