import { useParams } from 'react-router-dom';
import { useGetUser } from '../../lib/hooks/useGetUser';

import './userprofile.css';

export function UserProfile() {
  const { id } = useParams();

  const { user, loading, error } = useGetUser(id);

  if (error) {
    return <>Error: {error}</>
  }

  if (loading) {
    return (
      <>
        SPINNER
      </>
    );
  }

  if (!user && !loading) {
    return (
      <div>
        Пользователь не найден :(
      </div>
    );
  }

  return (
    <div className='userprofile__container'>
      
      <div className='userprofile__avatar_block'>
        <div className='userprofile__avatar_info_block'>
          <div className='userprofile__avatar'>
            <img className='userprofile__avatar_image' src={user.avatarPath ? user.avatarPath : '/defaultAvatar.jpg'}></img>
          </div>
          <div className='userprofile__info'>
            <p>Name: {user?.name}</p>
            <p>E-mail: {user?.email}</p>
            <p>Phone: {user?.phoneNumber}</p>
          </div>
        </div>
        <div className='userprofile__button'>
        </div>
      </div>

      <div className='userprofile__description_block'>
        <div className='userprofile__desription'>
          <p>О себе:</p>
          <p>{user?.AboutUser}</p>
        </div>
        <div className='userprofile__photos'><p>Фото питомцев:</p></div>
        <div className='userprofile__posts'><p>Последние 5 постов:</p></div>
      </div>

    </div>
  );
}