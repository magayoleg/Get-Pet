import { Button } from '../../components/Button';

import './userprofile.css';

export function UserProfile({name, email, age}) {
  return ( 
    <div className='userprofile__container'>

      <div className='userprofile__avatar_block'>
        <div className='userprofile__avatar_info_block'>
          <div className='userprofile__avatar'>
            <img className='userprofile__avatar_image' src={'https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png'}></img>
          </div>
          <div className='userprofile__info'>
            <p>Name: {name}</p>
            <p>E-mail: {email}</p>
            <p>Age: {age}</p>
          </div>
        </div>
        <div className='userprofile__button'>
          <Button name={'Edit'}/>
          <Button name={'Delete'}/>
        </div>
      </div>

      <div className='userprofile__description_block'>
        <div className='userprofile__desription'>
          <p>О себе:</p>
        </div>
        <div className='userprofile__photos'><p>Фото питомцев:</p></div>
        <div className='userprofile__posts'><p>Последние 5 постов:</p></div>
      </div>

    </div>
   );
}