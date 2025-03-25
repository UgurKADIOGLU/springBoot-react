package com.isg.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    PasswordEncoder passwordEncoder= new BCryptPasswordEncoder();

    public void save(User user){
        String encodedPAssword=passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPAssword);
        userRepository.save(user);
    }
}
