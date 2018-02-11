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
		<link rel="stylesheet" href="css/fonts.css" type="text/css" />
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
			                <img class="scale0" src="img/shakeLaw/53_img_gallery_shakes.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item second img-responsive">
			                <img class="scale1" src="img/shakeLaw/52_img_gallery_shakes.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item img-responsive">
			                <img class="scale3" src="img/shakeLaw/51_img_gallery_shakes.jpg" alt="Responsive image">
			              </div>
			              
			              <div class="item img-responsive">
			                <img class="scale3" src="img/shakeLaw/47_img_gallery_shakes.jpg" alt="Responsive image">
			              </div>
			              
			              <div class="item img-responsive">
			                <img class="scale3" src="img/shakeLaw/50_img_gallery_shakes.jpg" alt="Responsive image">
			              </div>
			              
			              <div class="item img-responsive">
			                <img class="scale3" src="img/shakeLaw/49_img_gallery_shakes.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item third img-responsive">
			                <img class="scale4" src="img/shakeLaw/46_img_gallery_shakes.jpg" alt="Responsive image">
			              </div>
			              
			              <div class="item last img-responsive">
			                <img class="scale4" src="img/shakeLaw/46_img_gallery_shakes.jpg" alt="Responsive image">
			              </div>
			              <div class="accolades2">
												<a class="prev-next" id="next2" href="bon-park.php">Next:<br>Bon &amp; Park</a>
												
												<br>
												
													<a class="prev-next" id="prev2" href="theo-superfamily.php">Previous:<br>Theo Superfamily</a>
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
				<h3>Shake Law</h3>
				<h4>Web Design / UI-UX / Branding / Illustraion</h4>
				
				<p>Over the summer of 2014, I worked for <a href="https://www.shakelaw.com/" target="_blank">Shake Law</a>, an app that creates legally binding contracts. I was tasked in doing a wide range of projects: website mock ups, branding expansion, blog and icon illustrations, marketing needs, photography, art direction, and of course, Shake swag.</p>
				
				<p>Art Directed by <a id="krissi" target="_blank" href="http://www.krissixenakis.com">Krissi Xenakis.</a></p>
			</div>	
			<div class="content-break"></div>
			<div class="mobileNP">
				<a class="mobileNepr" href="theo-superfamily.php">Previous:<br>Theo Superfamily</a>
				<a class="mobileNepr" href="bon-park.php">Next:<br>Bon &amp; Park</a>
			</div>
			<div class="accolades">
				<a class="next-prev" id="next" href="bon-park.php">Next:<br>Bon &amp; Park</a>
				
				<br>
				
					<a class="next-prev" id="prev" href="theo-superfamily.php">Previous:<br>Theo Superfamily</a>
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