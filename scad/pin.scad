$fn = 500;

//height = 29.5;
//height = 25;
height = 22;

module thread() {
	linear_extrude(height = 25*.75, convexity = 10, twist = -360*.75)
	square(size = [2, 7.5], center = true);

	linear_extrude(height = 25*.75, convexity = 10, twist = -360*.75)
	square(size = [7.5, 2], center = true);

	cylinder(d=5.5, h=height);
}

module threadedRod() {
	union() {
		difference() {
			thread();
			translate(v = [0, 0, -100])
			cylinder(h = 200, d = 3.10, $fn=30);
			
			//%translate([0,0,-0.0001])
			//%cylinder(h = 12, d = 3.25, $fn=30);
	
		}
		translate([0,0,-0.0001])
		intersection() {
			cylinder(h = 200, d = 3.15, $fn=30);
			translate([0,5+3.25/2-.525,height/2])
			cube([10,10,height], center=true);
		}
	}
}

module nut() {
	union() {
		difference() {
			//cylinder(h = 6, r = 6, $fn = 8);
			translate([.75,0,3])
			cube([11.5,10,6], center=true);
			scale(v=[1.1,1.1,1])
			thread();

			// Magnet cut-out
			//rotate([0,0,0])
			//translate([5.6,0,3.501])
			//color("silver")
			//cube([1,2.5,5], center=true);
			
			rotate([0,0,35])
			translate([6,0,-2])
			color("silver")
			cylinder(d=1.1,h=10);
		}
		// Square tube
		//difference() {
		//	translate([-5,-5,5])
		//	cube([10,10,20]);
	
		//	translate([-4,-4,-1])
		//	cube([8,8,30]);
		//}

		// Round tube
		difference() {
			translate([0,0,6])
			//cylinder(d=10,h=19);
			cylinder(d=10,h=14);
	
			translate([0,0,0])
			cylinder(d=9,h=30);
		}

		// Key
		rotate([0,0,-35])
		translate([4.75,-.75,6])
		//cube([1.75,1.5,19]);
		cube([1.75,1.5,14]);
	}
}

threadedRod();
nut();