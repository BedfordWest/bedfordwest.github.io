+++
title = "An Experiment with Arch and i3 Tiling Window Manager - Part 3"
date = 2015-05-21
[taxonomies]
categories=["blog"]
tags=["linux", "operating systems", "development environments", "tooling"]
+++

So things are going quite well with my Arch + i3 build! I was able to get sound working without much difficulty after simply installing my drivers, tweaking ALSA and then installing PulseAudio. The only tweaks I had to really do were as follows:
- The wrong device was being detected as the default sound device, so I had to tweak, if I recall, the `\etc\modprob.d\alsa-base.conf` settings file to manually set the correct default.
- My laptop’s sound buttons did not adjust the volume at first, so I had to use xev to identify which key values were mapped to my keyboard’s sound buttons.
After I did those things, my sound worked great! The only remaining initial item I needed to do to call my “base” installation complete was to customize my UI. So, I downloaded the feh image viewer, which goes well with i3, and then used it to take screenshots and set my background. I downloaded some fonts (Fira and Linux Libertine/Biolinum, in particular), grabbed a plugin for Firefox, and started tweaking some settings. I also grabbed the Xfce4 Terminal.

After tweaking a bunch of settings, here is a screenshot I took on Friday:

![arch picture](/arch_desktop.jpeg)

I’ve since removed the scrollbars from the terminal windows and adjusted my DPI settings to more accurately fit my displays. I have to say, I’m really enjoying it so far! Everything looks great, and it seems like a very fitting environment to develop in. I’m sure I’ll have many more additional tweaks, but I’m happy with the results thus far. My next quest is to publish some dotfiles on my GitHub account and start tweaking Emacs to fit my development paradigms.

Until next time!

- [Intro](arch-intro)
- [Part 1 - Adventures with Xorg!](arch-pt1)
- [Part 2 - External Woes](arch-pt2)
