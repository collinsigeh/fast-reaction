
            var totalTime = 0;
            var numberOfClicks = 0;
            var cycleDuration = 0;
            var cycleStart = 0;
            var cycleEnd = 0;

            function getTime(){

                return new Date().getTime();
            }

            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function makeShape(){

                var top = Math.floor(Math.random() * 326);
                var left = Math.floor(Math.random() * 326);
                var width = 30 + Math.floor(Math.random() * 46);
                var height = 30 + Math.floor(Math.random() * 46);
                var borderRadius = Math.floor(Math.random() * 101);

                document.getElementById('shape').style.top = top + "px";
                document.getElementById('shape').style.left = left + "px";
                document.getElementById('shape').style.width = width + "px";
                document.getElementById('shape').style.height = height + "px";
                document.getElementById('shape').style.borderRadius = borderRadius + "%";
                document.getElementById('shape').style.backgroundColor = getRandomColor();
                
                document.getElementById('shape').style.display = "block";
            }

            document.getElementById('startGame').onclick = function(){
                
                numberOfClicks = 0;

                document.getElementById('startGame').style.display = "none";

                document.getElementById('instructions').style.display = "none";

                document.getElementById('endGame').style.display = "inline-block";

                document.getElementById('activeRegion').style.display = "block";

                document.getElementById('playerPerformance').style.display = "none";

                makeShape();

                cycleStart = getTime();
            }

            document.getElementById('shape').onclick = function(){

                document.getElementById('shape').style.display = "none";

                numberOfClicks++;

                cycleEnd = getTime();

                cycleDuration = cycleEnd - cycleStart;

                totalTime += cycleDuration;

                makeShape();
            }
            
            document.getElementById('endGame').onclick = function(){

                document.getElementById('endGame').style.display = "none";

                document.getElementById('instructions').style.display = "block";

                document.getElementById('startGame').style.display = "inline-block";

                document.getElementById('activeRegion').style.display = "none";

                document.getElementById('playerPerformance').style.display = "block";

                if(numberOfClicks <= 0)
                {
                    document.getElementById('averageSpeed').innerHTML = "unkown. Play the game to find out.";
                }
                else
                {
                    totalTime = Math.round(totalTime/1000);

                    document.getElementById('averageSpeed').innerHTML = numberOfClicks + " clicks in " + totalTime + " secs.";
                }
            }