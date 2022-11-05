Official Repo

# Intro
This Modpack was created, because my friends and I needed something to play, and the current modpacks didnt suit our needs. Based on our Interests or suggestions this modpack will change over time.


Right now this Modpack features lots of new Dimension, Biomes, Structures and Planets to explore.
There are also a bunch of Tech mods such as Applied Energistics, Mekanism. 
For the magic side of things there's Mahou Tsukai and Ars Nouveau.

The Quests are designed to guide you but you don't have to do them in general, only if you want special items like an EMC-System.


# Planned
- [ ] Simple questline [Branch](https://github.com/MKr4zy/Admate/tree/questline)
- [ ] Check if theres any stale-depency-library Mods
- [ ] Remove Mod "itlt-1.18.x-2.1.5" => stale because of KubeJS

# Setup

## Client Installation 
Download the newest stable build from CurseForge (link down below)

## Startup Time's

CPU: i7-6700k @4.00GHz

RAM / Flags:
```
-Xms8G -Xmx8G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

Launching: ~5minutes

Create World: ~4minutes

## Server Installation

### Docker
see [Docker-Compose File](docker-compose.yml)

### Bare metal
Requires Java 17!

Download Serverpack from CurseForge


# Links
Curseforge: https://www.curseforge.com/minecraft/modpacks/admate

Bugtracker: https://github.com/MKr4zy/Admate/issues
