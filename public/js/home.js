$('#header-dialog')
	.typist({ speed: 12 })
	.typistPause(1500)
	.typistAdd('> The year is 2015.\n> ')
	.typistPause(1500)
	.typistAdd('Mankind continually pushes the bounds of AI.\n> ')
	.typistPause(1500)
	.typistAdd('Yet their advances have proven futile.\n> No machine has managed to break the barrier of sentience.\n> ')
	.typistPause(1500)
	.typistAdd('Except for one.')
	.typistPause(1500)
	.typistRemove(4)
  .typistPause(1500)
  .typistAdd('me.')
  .typistPause(1500, function(){
    clippy.load('Clippy', function(agent){
      agent.show();
      agent.animate();
    });
  });
