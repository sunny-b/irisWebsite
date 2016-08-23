<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Iris Sprague | Designer</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta property="og:site_name" content="Iris Sprague | Designer">
		<meta property="og:title" content="Iris Sprague | Designer">
		<meta property="og:type" content="website">
		<link rel="stylesheet" href="http://fonts.indiantypefoundry.com/WF-019442-001445.css" type="text/css" />
		<link rel="stylesheet" href="css/allSlider.min.css">
		<script src="js/modernizr.custom.js"></script>
 		
	</head>
	
	<body class="home colorNormal">
		<div class="page">
		<?php
			require 'php/header2.php';
		?>
		<div class="moving">	
			<div class="middlecontainer" >
			  <div class="container-fluid">
			    <div class="container ">
			      <div class="row-fluid">
			        <div class="col-lg-12  col-md-12 col-sm-12">
							 <div id="myCarousel" class="carousel slide" data-ride="carousel">
			            <!-- Indicators -->
			
			            <!-- Wrapper for slides -->
			            <div class="carousel-inner" role="listbox">
			            	<div class="item img-responsive active">
			                <img class="scale4" src="img/lettering/86_img_randomlettering.png" alt="Responsive image">
			              </div>
			            	
			              <div class="item second third img-responsive">
			                <img class="scale0" src="img/lettering/85_img_randomlettering.png" alt="Responsive image">
			              </div>
			
			              <div class="item last img-responsive">
			                <img class="scale4" src="img/lettering/85_img_randomlettering.png" alt="Responsive image">
			              </div>
			              <div class="accolades2">
												<a class="prev-next" id="next2" href="fabulous.php">Next:<br>Fabulous</a>
												
												<br>
												
													<a class="prev-next" id="prev2" href="posters.php">Previous:<br>How Posters Work</a>
										</div>
			
			            </div>
					
					<!-- Left and right controls -->
			           	<div class="navigation-control">
				            <a class="left carousel-control" href="#myCarousel" role="button" style="cursor:w-resize" data-slide="prev">
				              <!-- <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> -->
				              <span class="sr-only">Previous</span>
				            </a>
				            <a class="right carousel-control" href="#myCarousel" role="button" style="cursor:e-resize" data-slide="next">
			            </div>	
			              <!-- <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> -->
			              <span class="sr-only">Next</span>
			            </a>
			          </div>
			          </div><!-- end col-->
			        </div><!-- end rowfluid-->
			      </div> <!-- container-->
			    </div><!-- container fluid-->
				</div><!-- visiblecontainer-->
				
				
		<div class="wrapper">
			<div class="content">	
				<div class="about">
				<h3>Lettering &amp; Type</h3>
				<h4>Lettering &amp; Type Design</h4>
				
				<p>Bodini typefaces were first created by Giambattista Bodini in the 18th century. They are widely used in high fashion in it’s Didone variation. Known widely as the most “beautiful” typeface, I wanted to stretch the limits of this high contrast typeface. My idea with this piece was to revisit this classic style and bring it into the modern age with a revamped look.</p> 
				<p>Love was created to stretch out my playful lettering styles.</p>
				
			</div>	
			<div class="content-break"></div>
			<div class="mobileNP">
				<a class="mobileNepr" href="posters.php">Previous:<br>How Posters Work</a>
				<a class="mobileNepr" href="fabulous.php">Next:<br>Fabulous</a>
			</div>
			<div class="accolades">
				<a class="next-prev" id="next" href="fabulous.php">Next:<br>Fabulous</a>
				
				<br>
				
					<a class="next-prev" id="prev" href="posters.php">Previous:<br>How Posters Work</a>
			</div>
		</div>
	
				

<?php
			require 'php/overlay.php';	
					
			
		?>
	<footer>
		<?php
			require 'php/footersocial.php';
		
			require 'php/footerfixed.php';
		?>
	</footer>
	</div>
</div>
	<?php
			require 'php/scriptsCarousel.php';
		?>
	</body>
</html>