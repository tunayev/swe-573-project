package com.tunayev.turkdil.community;

import com.tunayev.turkdil.model.User;

import java.util.List;

public record CommunityDTO(
        int id,
        String name,
        boolean isPrivate,
        String description,
        List<User> users
) {
}
