## ADDED Requirements

### Requirement: Visual laser beam
The system SHALL render a visible laser beam originating from the custom
cursor position and extending in the pointer direction while active.

#### Scenario: Laser visual appears on activation
- **WHEN** the user activates the laser (pointerdown on the canvas or toggle
  enabled and click)
- **THEN** a visible beam element appears at the cursor and animates along the
  pointer direction

### Requirement: Toggle control
The system SHALL provide a UI control to enable or disable the laser feature.

#### Scenario: Toggle disables laser
- **WHEN** the user toggles the laser off
- **THEN** subsequent pointer interactions do not render or animate the beam

### Requirement: Highlight on intersection
The system SHALL visually highlight a character card when the laser beam
overlaps the card's bounding box.

#### Scenario: Highlight character on beam overlap
- **WHEN** the laser beam intersects a character card bounding box
- **THEN** the card receives a highlight style (e.g., outline or glow)
