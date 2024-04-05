import SocialMedia from "./SocialMedia"

const UnitTestingPage: React.FC = () => {
  return (
    <div>
        <h1>Unit Testing Demo!</h1>
        <SocialMedia 
          name = "Facebook"
          followersCount = "2M+"
        />
    </div>
  )
}

export default UnitTestingPage