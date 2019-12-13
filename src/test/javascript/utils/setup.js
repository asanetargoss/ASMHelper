var LabelNode = Java.type("org.objectweb.asm.tree.LabelNode");
var LineNumberNode = Java.type("org.objectweb.asm.tree.LineNumberNode");
var InsnList = Java.type("org.objectweb.asm.tree.InsnList");
var InsnNode = Java.type("org.objectweb.asm.tree.InsnNode");
var JumpInsnNode = Java.type("org.objectweb.asm.tree.JumpInsnNode");
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var VarInsnNode = Java.type("org.objectweb.asm.tree.VarInsnNode");
var FieldInsnNode = Java.type("org.objectweb.asm.tree.FieldInsnNode");
var FrameNode = Java.type("org.objectweb.asm.tree.FrameNode");
var TypeInsnNode = Java.type("org.objectweb.asm.tree.TypeInsnNode");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");
var ALOAD = Opcodes.ALOAD;
var GETFIELD = Opcodes.GETFIELD;
var ISTORE = Opcodes.ISTORE;
var INVOKEVIRTUAL = Opcodes.INVOKEVIRTUAL;
var ILOAD = Opcodes.ILOAD;
var IADD = Opcodes.IADD;
var INVOKESTATIC = Opcodes.INVOKESTATIC;
var ASTORE = Opcodes.ASTORE;
var IFNE = Opcodes.IFNE;
var ISUB = Opcodes.ISUB;
var CHECKCAST = Opcodes.CHECKCAST;
var NEW = Opcodes.NEW;
var DUP = Opcodes.DUP;
var INVOKESPECIAL = Opcodes.INVOKESPECIAL;
var RETURN = Opcodes.RETURN;

var /*InsnList*/ populateTestHaystack = function(/*InsnList*/ haystack)
{
	haystack.clear();
	var l0 = new LabelNode();
	haystack.add(l0);
	haystack.add(new LineNumberNode(44, l0));
	haystack.add(new VarInsnNode(ALOAD, 0));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/util/FoodStats", "foodLevel", "I"));
	haystack.add(new VarInsnNode(ISTORE, 3));
	var l1 = new LabelNode();
	haystack.add(l1);
	haystack.add(new LineNumberNode(45, l1));
	haystack.add(new VarInsnNode(ALOAD, 0));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/util/FoodStats", "entityplayer", "Lnet/minecraft/entity/player/EntityPlayer;"));
	haystack.add(new VarInsnNode(ALOAD, 1));
	haystack.add(new VarInsnNode(ALOAD, 2));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "net/minecraft/item/ItemFood", "func_150905_g", "(Lnet/minecraft/item/ItemStack;)I", false));
	haystack.add(new VarInsnNode(ILOAD, 3));
	haystack.add(new InsnNode(IADD));
	haystack.add(new MethodInsnNode(INVOKESTATIC, "org/bukkit/craftbukkit/event/CraftEventFactory", "callFoodLevelChangeEvent", "(Lnet/minecraft/entity/player/EntityPlayer;I)Lorg/bukkit/event/entity/FoodLevelChangeEvent;", false));
	haystack.add(new VarInsnNode(ASTORE, 4));
	var l2 = new LabelNode();
	haystack.add(l2);
	haystack.add(new LineNumberNode(47, l2));
	haystack.add(new VarInsnNode(ALOAD, 4));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "org/bukkit/event/entity/FoodLevelChangeEvent", "isCancelled", "()Z", false));
	var l3 = new LabelNode();
	haystack.add(new JumpInsnNode(IFNE, l3));
	var l4 = new LabelNode();
	haystack.add(l4);
	haystack.add(new LineNumberNode(49, l4));
	haystack.add(new VarInsnNode(ALOAD, 0));
	haystack.add(new VarInsnNode(ALOAD, 4));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "org/bukkit/event/entity/FoodLevelChangeEvent", "getFoodLevel", "()I", false));
	haystack.add(new VarInsnNode(ILOAD, 3));
	haystack.add(new InsnNode(ISUB));
	haystack.add(new VarInsnNode(ALOAD, 1));
	haystack.add(new VarInsnNode(ALOAD, 2));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "net/minecraft/item/ItemFood", "func_150906_h", "(Lnet/minecraft/item/ItemStack;)F", false));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "net/minecraft/util/FoodStats", "addStats", "(IF)V", false));
	haystack.add(l3);
	haystack.add(new LineNumberNode(52, l3));
	haystack.add(new FrameNode(Opcodes.F_APPEND, 2, [Opcodes.INTEGER, "org/bukkit/event/entity/FoodLevelChangeEvent"], 0, null));
	haystack.add(new VarInsnNode(ALOAD, 0));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/util/FoodStats", "entityplayer", "Lnet/minecraft/entity/player/EntityPlayer;"));
	haystack.add(new TypeInsnNode(CHECKCAST, "net/minecraft/entity/player/EntityPlayerMP"));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/entity/player/EntityPlayerMP", "playerNetServerHandler", "Lnet/minecraft/network/NetHandlerPlayServer;"));
	haystack.add(new TypeInsnNode(NEW, "net/minecraft/network/play/server/S06PacketUpdateHealth"));
	haystack.add(new InsnNode(DUP));
	haystack.add(new VarInsnNode(ALOAD, 0));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/util/FoodStats", "entityplayer", "Lnet/minecraft/entity/player/EntityPlayer;"));
	haystack.add(new TypeInsnNode(CHECKCAST, "net/minecraft/entity/player/EntityPlayerMP"));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "net/minecraft/entity/player/EntityPlayerMP", "getBukkitEntity", "()Lorg/bukkit/craftbukkit/entity/CraftPlayer;", false));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "org/bukkit/craftbukkit/entity/CraftPlayer", "getScaledHealth", "()F", false));
	haystack.add(new VarInsnNode(ALOAD, 0));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/util/FoodStats", "entityplayer", "Lnet/minecraft/entity/player/EntityPlayer;"));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "net/minecraft/entity/player/EntityPlayer", "getFoodStats", "()Lnet/minecraft/util/FoodStats;", false));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/util/FoodStats", "foodLevel", "I"));
	haystack.add(new VarInsnNode(ALOAD, 0));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/util/FoodStats", "entityplayer", "Lnet/minecraft/entity/player/EntityPlayer;"));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "net/minecraft/entity/player/EntityPlayer", "getFoodStats", "()Lnet/minecraft/util/FoodStats;", false));
	haystack.add(new FieldInsnNode(GETFIELD, "net/minecraft/util/FoodStats", "foodSaturationLevel", "F"));
	haystack.add(new MethodInsnNode(INVOKESPECIAL, "net/minecraft/network/play/server/S06PacketUpdateHealth", "<init>", "(FIF)V", false));
	haystack.add(new MethodInsnNode(INVOKEVIRTUAL, "net/minecraft/network/NetHandlerPlayServer", "sendPacket", "(Lnet/minecraft/network/Packet;)V", false));
	var l5 = new LabelNode();
	haystack.add(l5);
	haystack.add(new LineNumberNode(54, l5));
	haystack.add(new InsnNode(RETURN));
	var l6 = new LabelNode();
	haystack.add(l6);

	return haystack;
}