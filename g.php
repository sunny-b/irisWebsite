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
			                <img class="scale0" src="img/posters/36_img_gallery_g.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item second img-responsive">
			                <img class="scale1" src="img/posters/36_img_gallery_g2.jpg" alt="Responsive image">
			              </div>
			
										<div class="item third img-responsive">
			                <img class="scale4" src="img/posters/37_img_gallery_g.jpg" alt="Responsive image">
			              </div>
			              
			              <div class="item last img-responsive">
			                <img class="scale4" src="img/posters/37_img_gallery_g.jpg" alt="Responsive image">
			              </div>
			              <div class="accolades2">
												<a class="prev-next" id="next2" href="fonts.php">Next:<br>Do Not Steal Fonts</a>
												
												<br>
												
													<a class="prev-next" id="prev2" href="tweens.php">Previous:<br>Tweens Poster</a>
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
				<h3>G Poster</h3>
				<h4>Type &amp; Visual Design</h4>
				
				<p>As any type designer may tell you, creating the first letter is always the hardest. For my Theo Superfamily, I went through over fifty iterations of the “g” alone. This poster is an infographic displaying all the different versions I made before deciding on the perfect one.</p>
				
			</div>	
			<div class="content-break"></div>
			<div class="mobileNP">
				<a class="mobileNepr" href="tweens.php">Previous:<br>Tweens Poster</a>
				<a class="mobileNepr" href="fonts.php">Next:<br>Do Not Steal Fonts</a>
			</div>
			<div class="accolades">
				<a class="next-prev" id="next" href="fonts.php">Next:<br>Do Not Steal Fonts</a>
				
				<br>
				
					<a class="next-prev" id="prev" href="tweens.php">Previous:<br>Tweens Poster</a>
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