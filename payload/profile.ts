import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/sangho.jpg';
import { IProfile } from '../component/profile/IProfile';
//import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '한상호',
    small: '(Sangho Han)',
  },
  contact: [
    {
      title: "sanghohan@gmail.com",
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Cell Phone 010-4044-85XX',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/sanghohan',
      link: 'https://sanghohan.github.io',
      icon: faGithub,
    },
   {
      link: 'https://www.facebook.com/profile.php?id=100001597576423',
      icon: faFacebook,
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UCM4taYYMdhvwQSBAStbYB5Q',
      //icon: faRss,
      icon: faYoutube,
    },
  ],
  notice: {
    title: "저에 대해 궁금한 것이 있으면 언제든 연락 해주세요",
    icon: faBell,
  },
};

export default profile;
