import '../app/globals.css';
import { UserButton, currentUser, auth } from '@clerk/nextjs';

const MemberProfile = async () => {
  const user = await currentUser();
  const { userId } = auth();

  return (
    <div className='member-profile'>
      <UserButton afterSignOutUrl='/' />
      <p>{user?.emailAddresses[0]?.emailAddress}</p>
    </div>
  );
};

export default MemberProfile;
