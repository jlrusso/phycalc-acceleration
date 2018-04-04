<!DOCTYPE html>
<html>
<head>
	<title>PhyCalc | Physics Calculators</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="acceleration.css">
</head>
<body>

	<?php
		include_once "navSearch.php";
	?>

	<section id="main-content">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h2 class="animated bounceInDown section-heading">Acceleration</h2>
					<div class="pages-nav animated bounceInDown" id="top-pager">
						<ul class="pager">
							<li><a href="velocity.php" class="prev-page-btn"><span class="glyphicon glyphicon-chevron-left"></span>Previous: Velocity</a></li>
							<li><a href="kinematics.php" class="next-page-btn">Next: Kinematics<span class="glyphicon glyphicon-chevron-right"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row animated fadeInRight">
				<div class="col-md-8">
					<div class="panel panel-default">
						<div class="panel-heading">
							<div class="panel-title">
								<div class="solve-selection">
									<form>
										<span class="badge">1</span>
										<span><b>Solve:&nbsp;</b></span>
										<label class="radio-btn">
										 	<input type="radio" class="solve-btn" name="radio-one" id="acceleration-radio-btn">
										    <span class="checkmark">acceleration</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="solve-btn" name="radio-one" id="velocity-radio-btn">
										    <span class="checkmark">&Delta; velocity</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="solve-btn" name="radio-one" id="time-radio-btn">
										    <span class="checkmark">&Delta; time</span>
										</label>
									</form>
								</div>
								<div class="unit-selection">
									<form>
										<span class="badge">2</span>
										<span><b>Units:&nbsp;</b></span>
										<label class="radio-btn">
										 	<input type="radio" class="unit-btn" units="ft" name="radio-two" id="feet-radio-btn">
										    <span class="checkmark">feet</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="unit-btn" units="m" name="radio-two" id="meter-radio-btn">
										    <span class="checkmark">meters</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="unit-btn" units="mi" name="radio-two" id="mile-radio-btn">
										    <span class="checkmark">miles</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="unit-btn" units="km" name="radio-two" id="kilometer-radio-btn">
										    <span class="checkmark">kilometer</span>
										</label>
									</form>
								</div>
								<div class="time-selection">
									<form>
										<span class="badge">3</span>
										<span><b>Time:&nbsp;</b></span>
										<label class="radio-btn">
										 	<input type="radio" class="time-btn" units="sec" name="radio-three" id="seconds-radio-btn"/>
										    <span class="checkmark">seconds</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="time-btn" units="min" name="radio-three" id="minutes-radio-btn"/>
										    <span class="checkmark">minutes</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="time-btn" units="hr" name="radio-three" id="hours-radio-btn"/>
										    <span class="checkmark">hours</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="time-btn" units="day" name="radio-three" id="days-radio-btn"/>
										    <span class="checkmark">days</span>
										</label>
									</form>
								</div>
							</div>
						</div>
						<div class="panel-body" id="main-panel">
							<div class="row">
								<div class="col-md-4">
									<h4 class="text-center"><span class="badge">4</span>&nbsp;<strong>Values</strong></h4>
									<form class="values-form">
									<input class="form-control input-field" type="number" id="acceleration-field" placeholder="acceleration">
									<input class="form-control input-field" type="number" id="velocity-change-field" placeholder="velocity (&Delta;v)">
									<input class="form-control input-field" type="number" id="time-change-field" placeholder="time (&Delta;t)">
									<span id="delta-symbol">&Delta;</span>
									<input class="form-control input-field" type="number" id="sig-figs-field" placeholder="# of sigfigs (optional)">
									<div class="form-divider"></div>
									<div class="calc-and-clear">
										<button type="button" id="calculate-btn"><b>Calculate</b></button>
										<button type="button" id="clear-btn"><b>Clear</b></button>
									</div>
									</form>
								</div>
								<div class="col-md-8 text-center">
									<h4 id="equation-heading"><strong>Equation</strong></h4>
									<div id="slide-arrows-container">
										<div class="slide-arrow-btn" id="prev-slide-btn"><span class="glyphicon glyphicon-chevron-left"></span></div>
										<div class="slide-arrow-btn" id="next-slide-btn"><span class="glyphicon glyphicon-chevron-right"></span></div>
									</div>
									<div id="outer-image-container">
										<div id="inner-image-container">
											<img src="../img/accl-equation-one.png" class="img-responsive slide" alt="Accl Equation 1"/>
											<img src="../img/accl-equation-two.png" class="img-responsive slide" alt="Accl Equation 2"/>
											<img src="../img/accl-equation-three.png" class="img-responsive slide" alt="Accl Equation 3"/>
										</div>
										<div id="slide-bar-indicators">
											<div class="slide-bar"></div>
											<div class="slide-bar"></div>
											<div class="slide-bar"></div>
										</div>
									</div>
									<div id="solo-image">
										<img src="../img/solo-accl-image.png" class="img-responsive" alt="Acceleration Graph"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="panel panel-default">
						<div class="panel-heading">
							<div class="panel-title text-center"><h4 id="background-heading"><b>Background:</b></h4></div>
						</div>
						<div class="panel-body module-section">
							<div class="module-box">
								<div class="module top-corners-rounded">
									<div class="module-front first-front">Acceleration</div>
									<div class="module-back first-back">
										Calculate from a change in velocity over given period of time
									</div>
								</div>
							</div>
							<div class="module-box">
								<div class="module">
									<div class="module-front">Negative Acceleration</div>
									<div class="module-back">
										Occurs when an object with velocity is slowing down over time
									</div>
								</div>
							</div>
							<div class="module-box">
								<div class="module">
									<div class="module-front">Positive Acceleration</div>
									<div class="module-back">
										Occurs when an object with velocity is gaining speed over time
									</div>
								</div>
							</div>
							<div class="module-box">
								<div class="module">
									<div class="module-front last-front">Graph Below</div>
									<div class="module-back last-back">
										Acceleration can be represented as the slope in a velocity vs. time graph
									</div>
								</div>
							</div>
							<div class="module-img">
								<img src="../img/acceleration-graph.png" class="img-responsive" alt="Pythagorean Triangle">
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-body" id="third-pics-panel">
					<div class="row animated fadeInLeft">
						<div class="col-sm-4 third-page-pics">
							<img src="../img/rocket-launch.jpeg" alt="Rocket Launch" class="img-responsive">
							<div class="img-caption">
								<p>To reach earth's orbit, a space shuttle must accelerate from zero to almost 28,968 kilometers per hour. <a href="https://spaceflight.nasa.gov/shuttle/reference/basics/launch.html" target="_blank"/> (Source)</a></p>
							</div>
						</div>
						<div class="col-sm-4 third-page-pics">
							<img src="../img/formula-one.jpeg" alt="Formula 1 Car" class="img-responsive">
							<div class="img-caption">
								<p>Due to traction loss, a 2016 F1 car could accelerate from 0 to 60 in under 1 second, instead of the actual 2.5 seconds. <a href="https://en.wikipedia.org/wiki/Formula_One_car#Acceleration" target="_blank"/> (Source)</a></p>
							</div>
						</div>
						<div class="col-sm-4 third-page-pics">
							<img src="../img/roller-coaster.jpg" alt="Apple" class="img-responsive">
							<div class="img-caption">
								<p>One of Disney Land's roller coasters, California Screamin', can accelerates from 0 to 55 mph in 4 seconds. <a href="https://en.wikipedia.org/wiki/California_Screamin%27" target="_blank"/> (Source)</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="line-divider"></div>

			<?php
				include_once "practice.php";
				include_once "conversion-calculator.php";
			?>

			<div class="modal fade example-modal" id="my-modal-one" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="text-center">Acceleration</h4>
						</div>
						<div class="modal-body">
							<button class="accordion first-accordion"><strong>Problem</strong></button>
							<div class="modal-panel">
								<div class="modal-text">
									<p>
										Arnold is running late to work and is driving 70 mph in a 25 mph zone. He sees a child run for a ball in the middle of the street so he hits he brakes as hard as he can and comes to a full stop in  3.5 seconds. What was his acceleration / deceleration?
									</p>
								</div>
							</div>
							<button class="accordion"><strong>Illustration</strong></button>
							<div class="modal-panel">
								<img src="img/accelerationAccordionImg1.png" alt="Car deceleration" class="img-responsive"/>
							</div>
							<button class="accordion"><strong>Given Variables</strong></button>
							<div class="modal-panel">
								<p>
									<ul>
										<li><b>Equation</b> : a = (delta V) / (delta t) = (vf - vi) / &Delta;t)</li>
										<li><b>Top Velocity</b> : 70 mph (1 mph = 0.447 m/s) = V<sub>initial</sub></li>
										<li><b>Full Stop</b> : in 3.5 seconds = &Delta;t</li>
										<li><b>Final Velocity (Vf)</b> : 0 m/s</li>
									</ul>
								</p>
							</div>
							<button class="accordion last-accordion"><strong>Solution:</strong></button>
							<div class="modal-panel">
								<p>
									<ul>
										<li><b>Convert mph to m/s</b> : 1 mph = 0.447 m/s, 70 mph * 0.447 = 31.29 m/s</li>
										<li><b>Solve for a</b> : a = (0 m/s - 31.29 m/s) / (3.5 s - 0)</li>
										<li><b>Solution</b>: -8.94 m/s<sup>2</sup></li>
									</ul>
								</p>
							</div>
						</div>
						<div class="modal-footer text-center">
							<button type="button" class="btn glyphicon glyphicon-remove" data-dismiss="modal"></button>
						</div>
					</div>
				</div>
			</div>

				<div class="modal fade example-modal" id="my-modal-two" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="text-center">Velocity Change</h4>
							</div>
							<div class="modal-body">
								<button class="accordion first-accordion"><strong>Problem</strong></button>
								<div class="modal-panel">
									<p>
										If a drag racer starts from a stop and accelerations down the track at 12 m/s<sup>2</sup> for 9.5 seconds, what would be his final velocity?
									</p>
								</div>
								<button class="accordion"><strong>Illustration</strong></button>
								<div class="modal-panel">
									<img src="img/accelerationAccordionImg2.png" alt="Car deceleration" class="img-responsive"/>
								</div>
								<button class="accordion"><strong>Given Variables</strong></button>
								<div class="modal-panel">
									<p>
										<ul>
											<li><b>Equation</b> : a = (delta V) / (delta t) = (vf - vi) / &Delta;t)</li>
											<li><b>Starting Velocity</b> : 0 b/c he starts from a stop</li>
											<li><b>Time Interval</b> : 9.5 seconds</li>
										</ul>
									</p>
								</div>
								<button class="accordion last-accordion"><strong>Solution</strong></button>
								<div class="modal-panel">
									<p>
										<ol>
											<li><b>Solve for v</b> : v = a * (t<sub>f</sub> - t<sub>i</sub>)</li>
											<li><b>Input Values</b> : v = 12 m/s<sup>2</sup> * 9.5 seconds </li>
											<li><b>Solution</b> : 114 m/s</li>
										</ol>
									</p>
								</div>
							</div>
							<div class="modal-footer text-center">
								<button type="button" class="btn glyphicon glyphicon-remove" data-dismiss="modal"></button>
							</div>
						</div>
					</div>
				</div>





				<div class="modal fade example-modal" id="my-modal-three" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="text-center">Time Interval</h4>
							</div>
							<div class="modal-body">
								<button class="accordion first-accordion"><strong>Problem</strong></button>
								<div class="modal-panel">
									<p>
										If a speed boat is going 91 mph and starts to decelerate at a rate of 4.2 m/s<sup>2</sup> how long would it take the boat to come to a complete stop?
									</p>
								</div>
								<button class="accordion"><strong>Illustration</strong></button>
								<div class="modal-panel">
									<img src="img/accelerationAccordionImg3.png" alt="Car deceleration" class="img-responsive"/>
								</div>
								<button class="accordion"><strong>Given Variables</strong></button>
								<div class="modal-panel">
									<p>
										<ul>
											<li><b>Equation</b> : a = (delta V) / (delta t) = (vf - vi) / &Delta;t)</li>
											<li><b>Solve for t</b> : t = velocity / acceleration</li>
											<li><b>Boat Velocity</b> : 91 mph</li>
											<li><b>Rate of Acceleration</b> : -3.2 m/s<sup>2</sup></li>
										</ul>
									</p>
								</div>
								<button class="accordion last-accordion"><strong>Solution</strong></button>
								<div class="modal-panel">
									<p>
										<ol>
											<li><b>Convert mph to m/s</b> : 1 mph = 0.447 m/s, 91 mph = 40.68 m/s </li>
											<li><b>Input Values</b> : t = 40.68 m/s / 3.2 m/s<sup>2</sup></li>
											<li><b>Solution</b> : 12.71 seconds</li>
										</ol>
									</p>
								</div>
							</div>
							<div class="modal-footer text-center">
								<button type="button" class="btn glyphicon glyphicon-remove" data-dismiss="modal"></button>
							</div>
						</div>
					</div>
				</div>


				<!-- Calculator Modal -->
						<div class="modal fade" id="calculator-modal" role="dialog">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h4 class="text-center">Calculator</h4>
									</div>
										<div class="modal-body">

											<?php
												include_once "calculator.php";
										  ?>

												<div id="calculator-tooltip"></div>
										</div>
									<div class="modal-footer text-center" id="calc-modal-footer">
										<button type="button" class="btn glyphicon glyphicon-remove" data-dismiss="modal"></button>
									</div>
								</div>
							</div>
							<div class="close-modal-btn">
								<span class="btn glyphicon glyphicon-remove"></span>
							</div>
						</div>
						<!-- End of Calculator Modal -->

						<!-- Go back to top -->
						<div id="go-up-container">
							<button type="button" id="go-up-btn"><span class="glyphicon glyphicon-chevron-up"></span></button>
						</div>



			<div class="row">
				<div class="col-md-12">
					<ul class="pager" id="bottom-pager">
						<li><a href="velocity.php" class="prev-page-btn"><span class="glyphicon glyphicon-chevron-left"></span>Previous: Velocity</a></li>
						<li><a href="kinematics.php" class="next-page-btn">Next: Kinematics<span class="glyphicon glyphicon-chevron-right"></span></a></li>
					</ul>
				</div>
			</div>

	</section>

	<script type="text/javascript" src="acceleration.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="jsCalculator.js"></script>





</body>
</html>
