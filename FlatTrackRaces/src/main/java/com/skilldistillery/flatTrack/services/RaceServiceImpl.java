package com.skilldistillery.flatTrack.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.flatTrack.entities.Race;
import com.skilldistillery.flatTrack.repos.FlatTrackRepo;

@Service
public class RaceServiceImpl implements RaceService {

	@Autowired
	private FlatTrackRepo ftr;

	@Override
	public List<Race> getAllRaces() {
		return ftr.findAll();
	}

	@Override
	public Race getRaceById(int id) {
		Optional<Race> raceOpt = ftr.findById(id);
		if (raceOpt.isPresent()) {
			return raceOpt.get();
		}
		return null;
	}

	@Override
	public Race createRace(Race race) {
		return ftr.saveAndFlush(race);
	}

	@Override
	public Race updateRace(int id, Race race) {
		Optional<Race> raceOpt = ftr.findById(id);
		Race managedRace = null;
		if (raceOpt.isPresent()) {
			managedRace = raceOpt.get();

			managedRace.setLength(race.getLength());
			managedRace.setName(race.getName());
			managedRace.setTrack(race.getTrack());

			ftr.saveAndFlush(managedRace);
		}
		return managedRace;
	}

	@Override
	public void deleteRace(int id) {
		try {
			ftr.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
