import HttpService from "./http-service";

class AuthService extends HttpService {
  login = async (data) => {
    try {
      let response = await this.postRequest("login", data);
      let result = response.result;
      let local_usr = {
        name: result.user.name,
        email: result.user.email,
        role: result.user.role,
        user_id: result.user._id,
      };
      localStorage.setItem("token", result.access_token);
      localStorage.setItem("user", JSON.stringify(local_usr));
      return local_usr;
    } catch (error) {
      throw error;
    }
  };
}
export const auth_svc = new AuthService();
export default AuthService;
