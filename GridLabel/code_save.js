// Example: Duplicate a selected node (label) in a grid on an A4 frame

// Get the selected label
const label = figma.currentPage.selection[0];

const mmSize = 10;
const margin = 2 * mmSize;
const a4Width = 210 * mmSize; // A4 width in pixels (assuming 144 PPI)
const a4Height = 297 * mmSize; // A4 height in pixels
const labelWidth = label.width; // Convert mm to pixels (1 mm ≈ 3.7795 px at 144 PPI)
const labelHeight = label.height;

// Create an A4 frame
const a4Frame = figma.createFrame();
a4Frame.resize(a4Width, a4Height);
a4Frame.x = 100;
a4Frame.y = 300;
a4Frame.name = label.name;

// Calculate how many labels fit
const cols = Math.floor((a4Width - margin) / labelWidth);
const rows = Math.floor((a4Height - margin) / labelHeight);

// const centerOffset_X = (a4Width - (cols * labelWidth)) / 2;
// const centerOffset_Y = (a4Height - (rows * labelHeight)) / 2;

// Duplicate and arrange labels
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const copy = label.clone();
    copy.x = col * labelWidth;
    copy.y = row * labelHeight;
    a4Frame.appendChild(copy);
  }
}

figma.closePlugin();