# Boris Bikes

_Round Two_

A second attempt at Basic Boris Bikes file structure and functions, in Javascript

## Motivation

Consolidation of existing coding knowledge and TDD processes, in a different language.

## Tech used

Built with
- Javascript

Tested with
- Jest

## Domain Modelling

```
As a user,
So that I can use a bike,
I'd like a docking station to release a bike.

As a user,
So that I can use a good bike,
I'd like to see if a bike is working
```

Objects | Messages 
------- | -------- 
User | 
Bike | isWorking
DockingStation | releaseBike

```
As a member of the public
So I can return bikes I've hired
I want to dock my bike at the docking station

As a member of the public
So I can decide whether to use the docking station
I want to see a bike that has been docked
```

Objects | Messages 
------- | -------- 
User |
DockingStation | dockBike
DockingStation | showBikes
