package com.skilldistillery.flatTrack.services;

import java.util.List;

import com.skilldistillery.flatTrack.entities.Race;

public interface RaceService {
	
	 List <Race> getAllRaces();
	 
	 Race getRaceById(int id);
	 
	 Race createRace(Race race);
	 
	 Race updateRace(int id, Race race);
	 
	 void deleteRace(int id);
	 
	 

}
