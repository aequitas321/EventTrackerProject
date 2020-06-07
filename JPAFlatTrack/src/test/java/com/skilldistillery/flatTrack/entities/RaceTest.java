package com.skilldistillery.flatTrack.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import antlr.debug.Event;

class RaceTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Race race;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("FlatTrackPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		race = em.find(Race.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		race = null;
	}

	@Test
	void test() {
		assertNotNull(race);
		assertEquals("Red Mile", race.getTrack());
	}

}
