type ProfileProps = {
  name: string;
  role: string;
};

const Profile = ({ name, role }: ProfileProps) => {
  return (
    <header>
      <h1>{name}</h1>
      <p>{role}</p>
    </header>
  );
};

export default Profile;