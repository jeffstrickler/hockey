Background
==========

This was a code test I received from a prospective client. Uploading my solution here so that whomever is interested can see the results (and maybe I don't have to waste anymore of my time on silly code tests).

--------------------------------------------------------------------------------


The Problem
===========
We want you to create a command-line application that will calculate the
ranking table for a hockey league.

Input/output
------------
The input and output will be text. Your solution should parse the provided
sample-input.txt file via stdin (pipe or redirect) or by parsing a file passed
by name on the command line. Your solution should output the correct result via
stdout to the console.

The input contains results of games, one per line. See sample-input.txt for
details. The output should be ordered from most to least points, following
(exactly) the format specified in expected-output.txt.

You can expect that the input will be well-formed. There is no need to add
special handling for malformed input files.

The rules
---------
In this league, a draw (tie) is worth 1 point and a win is worth 3 points. A
loss is worth 0 points. If two or more teams have the same number of points,
they should have the same rank and be printed in alphabetical order (as in the
tie for 3rd place in the sample data).

Guidelines
-----------
We’ve been on the implementing side of coding tests in many interviews where the
problem is meant to be unexpectedly complex or full of “gotchas”. Those are bullshit
and this isn’t meant to be one of those.

This should be implemented in a language with which you are familiar. We would
prefer that you use ruby or javascript, if you are comfortable doing so, but if
you can best shine in another language, go for it!

Your solution should be able to be run (and if applicable, built) from the
command line. Please include appropriate scripts and instructions for
running your application and your tests.

If you use other libraries installed by a common package manager
(rubygems/bundler, npm, etc), it is not necessary to commit the
installed packages.

We write automated tests and we would like you to do so as well.

We appreciate well factored, object-oriented or functional code.

Please document any steps necessary to run your solution and your tests.

Platform support
----------------
This will be run in a unix-ish environment (OS X). If you choose to use a
compiled language, please keep this in mind. (Dependency on Xcode is acceptable
for objective-c solutions) Please use platform-agnostic constructs where
possible (line-endings and file-path-separators are two problematic areas).
