CREATE TABLE plates(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
    value REAL NOT NULL,
    description TEXT NOT NULL,
    places_id INTEGER,
    FOREIGN KEY(places_id) REFERENCES places(id)
)