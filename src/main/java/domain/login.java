package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class login 
{
@Id
    private String username;
    private String Password;
    public login(String username, String password) 
    {
        this.username = username;
        this.Password = password;
    }
    
    public login() 
    {
        
    }

    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return Password;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public void setPassword(String password) {
        Password = password;
    }


}
