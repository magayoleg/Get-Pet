import { useParams } from "react-router-dom";
import { useGetUser } from "../../lib/hooks/useGetUser";
import "./userprofile.css";

const { REACT_APP_HOST: host } = process.env;

export function UserProfile() {
  const { id } = useParams();

  const { user, loading, error } = useGetUser(id);

  if (error) {
    return <>Error: {error}</>;
  }

  if (loading) {
    return <>SPINNER</>;
  }

  if (!user && !loading) {
    return <div>Пользователь не найден :(</div>;
  }

  return (
    <div className="userprofile__container">
      <div className="userprofile__avatar_block">
        <div className="userprofile__avatar_info_block">
          <div className="userprofile__avatar">
            <img
              className="userprofile__avatar_image"
              src={
                user.avatarPath
                  ? host + user.avatarPath
                  : "/images/defaultAvatar.jpg"
              }
            ></img>
          </div>
          <div className="userprofile__info">
            <p>Имя: {user?.name}</p>
            <p>E-mail: {user?.email}</p>
            <p>Телефон: {user?.phoneNumber || 'Не указан'}</p>
          </div>
        </div>
        <div className="userprofile__button"></div>
      </div>

      <div className="userprofile__desription_block">
        <div className="userprofile__desription">
          <p>О себе:</p>
          <p>{user?.aboutUser}</p>
        </div>
        <div className="userprofile__posts">
          <p>Мои объявления:</p>
        </div>
      </div>
    </div>
  );
}
