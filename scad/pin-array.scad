$fn = 60;

motor_length = 12.5;
motor_width = 12.5;
motor_center_diameter = 10.7;

key_height = 1.5;
key_width = 1.7;

//plate_length = motor_length * 3;
//plate_width = motor_width * 3;
height = 3;


module motor_guide(center_x, center_y, angle) {
		// Motor shaft
		translate([center_x, center_y, -2])
		cylinder(d = motor_center_diameter, h = 10, $fn=60);
	
		// Key
		translate([center_x, center_y, 0])
		rotate([0,90,angle])
		translate([0, motor_center_diameter/2 + key_height/2 - 0.1,0])
		rotate([0,0,0])
		cube([19, key_height, key_width], center=true);	
}

module motor_mount(center_x, center_y) {
	motor_mount_hole_diameter = 1.8;
	motor_mount_hole_offset = 4.5;
	motor_mount_center_diameter = 4.3;

	// 	Center hole
	translate([center_x, center_y, -3])
	cylinder(d = motor_mount_center_diameter, h = 10);

	// Mounting hole #1
	translate([center_x - motor_mount_hole_offset, center_y, -3])
	cylinder(d = motor_mount_hole_diameter, h = 10);
	
	// Mounting hole #2
	translate([center_x + motor_mount_hole_offset, center_y, -3])
	cylinder(d = motor_mount_hole_diameter, h = 10);
}

module motor_array(l, w) {
	plate_length = motor_length * w;
	plate_width = motor_width * l;

	difference() {
		color("white")
		cube([plate_width, plate_length, height]);

		for (x = [motor_width/2 : motor_width : plate_width]) {
			for (y = [motor_length/2 : motor_length : plate_length]) {
				motor_mount(x, y);
			}
		}

		// Mount holes
		// Bottom left
		translate([motor_length, motor_length+.5, -2])
		cylinder(d = 2.1, h = 10);
	
		// Bottom right
		translate([plate_width - motor_length, motor_length + .5, -2])
		cylinder(d = 2.1, h = 10);
	
		// Top left
		translate([motor_length, plate_length - motor_length + .5, -2])
		cylinder(d = 2.1, h = 10);
	
		// Top right
		translate([plate_width - motor_length, plate_length - motor_length + .5, -2])
		cylinder(d = 2.1, h = 10);
	}
}

module pin_array(l, w, show_pins = false) {
	plate_length = motor_length * w;
	plate_width = motor_width * l;

	difference() {
		color("white")
		cube([plate_width, plate_length, height]);
	
		for (x = [motor_width/2 : motor_width : plate_width]) {
			for (y = [motor_length/2 : motor_length : plate_length]) {
				motor_guide(x, y - 0.25, -35);
			}
		}
		
		// Mount holes
		// Bottom left
		translate([motor_length, motor_length+.5, -2])
		cylinder(d = 2.1, h = 10);
	
		// Bottom right
		translate([plate_width - motor_length, motor_length + .5, -2])
		cylinder(d = 2.1, h = 10);
	
		// Top left
		translate([motor_length, plate_length - motor_length + .5, -2])
		cylinder(d = 2.1, h = 10);
	
		// Top right
		translate([plate_width - motor_length, plate_length - motor_length + .5, -2])
		cylinder(d = 2.1, h = 10);
	}

	if (show_pins == true) {
		show_pins(l, w);
	}
}

		//color("red")
		//translate([motor_length,motor_length+.25,-6])
		//cylinder(d=2.5, h=20);

// Show pins

module show_pins(l, w) {
	plate_length = motor_length * w;
	plate_width = motor_width * l;

	for (x = [motor_width/2 : motor_width : plate_width]) {		
		for (y = [motor_length/2 : motor_length : plate_length]) {
			height = rands(-13,1,1)[0];
			translate([0,0,height]) {
				color("gray")
				translate([x,y - 0.25,-1])
				rotate([0,0,90])
				import("../stl/nut-20-mm.stl");
	

				color("#FF0000")
				translate([x,y - 0.25,19])
				cylinder(d=12, h=1);
				//cube([12,12,1], center=true);	
			}
		}
	}
}

//pin_array(5,5, show_pins=true);
//pin_array(3,3);

//translate([0,0,-20])
//pin_array(3,3);

translate([0,0,20])
pin_array(3,5, show_pins=true);

motor_array(3,5);

