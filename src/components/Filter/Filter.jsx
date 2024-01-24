import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from '../../redux/contacts/actions';
import { selectFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const changeFilterValue = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.search}>
      <span className={s.label}>Find contacts by name</span>
      <input
        onChange={changeFilterValue}
        type="text"
        name="name"
        required
        className={s.input}
        value={filter}
      />
    </div>
  );
};
