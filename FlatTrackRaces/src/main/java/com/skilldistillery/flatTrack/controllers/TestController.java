package com.skilldistillery.flatTrack.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.flatTrack.entities.Race;
import com.skilldistillery.flatTrack.services.RaceService;

@RestController
@RequestMapping("api")
public class TestController {

	@Autowired
	RaceService rs;

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}

	@GetMapping("pong")
	public String pong() {
		return "ping";
	}

	@GetMapping("race")
	public List<Race> index() {
		return rs.getAllRaces();
	}

	@GetMapping("race/{id}")
	public Race getRaceById(@PathVariable Integer id) {
		return rs.getRaceById(id);
	}

	@PostMapping("race/{id}")
	public Race updateRace(@PathVariable Integer id, @RequestBody Race race) {
		return rs.updateRace(id, race);
	}

	@PutMapping("race")
	public Race createRace(@RequestBody Race race) {
		return rs.createRace(race);
	}

	@DeleteMapping("race/{id}")
	public void deleteRace(@PathVariable Integer id) {
		rs.deleteRace(id);
	}

}
