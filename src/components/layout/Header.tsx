import Link from 'next/link';
import Avatar from '../Avatar/Avatar';
import * as S from './Header.style';

const Header = async () => {
  const profile = { name: '도리', imageUrl: null };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Link href={'/'}>
          <S.Logo />
        </Link>
        <S.MenuContainer>
          <S.AvatarContainer>
            <S.ProfileName>{profile.name}</S.ProfileName>
            <Avatar
              width="35px"
              height="35px"
              imageUrl={profile.imageUrl || 'https://via.placeholder.com/150'}
            />
          </S.AvatarContainer>
        </S.MenuContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
