package com.skilldistillery.flatTrack.repos;
import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.flatTrack.entities.Race;



public interface FlatTrackRepo extends JpaRepository<Race, Integer>{

}
