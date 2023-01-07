import Input from "../../components/UIKit/Input/Input";
import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="container">
        <div className="CreateAccount__wrapper">
          <form>
            <h1>Create new user</h1>

            <Input type="text" label="Login" name="Login" />
            <Input type="text" label="Pick a password" name="Password" />
            <Input type="text" label="Confirm password" name="ConfirmPassword" />
            <Input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount;