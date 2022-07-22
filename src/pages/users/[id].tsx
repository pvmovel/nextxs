import { useRouter, NextRouter } from "next/router";

const UserGetPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;
  <h1>UserGetPage {id}</h1>;
};

export default UserGetPage;
